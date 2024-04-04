import Draggable from "./Draggable";

export default function Dropzone({id, droppable}: {id: number, droppable: boolean}) {
    return (
        <div style={
                {
                    width: '10rem', 
                    height: '10rem', 
                    background: '#008080', 
                    opacity: '46%',
                    borderRadius: '0.5rem'
                }
            }>
            {droppable ? <Draggable id="draggable">Drag me</Draggable> : 'Cannot drop here'}
        </div>
    );
}