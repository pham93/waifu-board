import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { AvatarCard } from "../../../ui/avatar-card.component";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

export function DraggableItem(props: { item: any; index: number }) {
  const { item, index } = props;
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          <AvatarCard
            name={item.firstName}
            src={item.img}
            sub={item.firstName}
          />
        </div>
      )}
    </Draggable>
  );
}
