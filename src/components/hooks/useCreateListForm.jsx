function useCreateListForm() {
  const { dispatch } = useTask();
  const { setActiveListId } = useActiveList();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (name, type, toast, resetForm) => {
      if (!name?.trim()) {
        toast(createListToastConfig.invalidName);
        return;
      }

      const newId = nanoid();
      const newList = {
        id: newId,
        name,
        type,
      };

      setIsLoading(true);
      try {
        await dispatch(createList(newList));
        setActiveListId(newId);
        resetForm();
        toast(createListToastConfig.success);
      } catch (err) {
        console.error(err);
        toast(createListToastConfig.error);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, setActiveListId]
  );

  return { isLoading, handleSubmit };
}
