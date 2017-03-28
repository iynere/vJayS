export const SortableList = SortableContainer(({videos}) => {
  return (
    <List horizontal style={{whiteSpace: "nowrap", overflowX: "auto", overflowY: "hidden"}}>
      {videos.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </List>
  );
});