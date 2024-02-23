import DraggableContent from "../../../DraggableContent";
import Showcase from "../../../Showcase";
import list_items from "./list_items";

function DraggableList() {
    return (
        <>
            <p>Here's a list of my all time favorite animated series. Drag to re-order the list!</p>
            <Showcase footnote={ "react-spring: draggable-list" }>
                <DraggableContent items={ list_items }/>
            </Showcase>
        </>
    )
}

export default DraggableList;