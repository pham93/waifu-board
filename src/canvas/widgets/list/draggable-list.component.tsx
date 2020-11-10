import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Waifu, getDefaultWaifus } from "../../../mocks/waifu";
import { DraggableItem } from "./draggable-item.component";

const grid = 8;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

// a little function to help us with reordering the result
const reorder = (list: Waifu[], startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function DraggableList() {
  const [waifus, setWaifus] = useState<Waifu[]>(getDefaultWaifus);
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const waifusReordered = reorder(
      waifus,
      result.source.index,
      result.destination.index
    );

    setWaifus(waifusReordered);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {waifus.map((waifu, index) => (
              <DraggableItem key={waifu.id} item={waifu} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
