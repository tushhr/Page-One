import {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import Dropzone from './components/Dropzone';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';

export default function App() {
  const containers = [1, 2, 3];
  const [parent, setParent] = useState(null);

  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      <div style={{display: 'flex', gap: '2rem', justifyContent: 'centre'}}>
        {containers.map((id) => (
          <Droppable id={id}>
            <Dropzone id={id} droppable={id === parent}/>
          </Droppable>
        ))}
      </div>
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const {over} = event;
    setParent(over ? over.id : null);
  }
};