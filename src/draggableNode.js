// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`${type} cursor-grab hover:shadow-md active:cursor-grabbing px-4 py-2 min-w-[90px] h-[50px] flex items-center justify-center flex-col rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white font-medium text-sm transition-all duration-200 hover:from-primary-dark hover:to-primary-dark shadow-base`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        draggable
      >
        <span>{label}</span>
      </div>
    );
  };
  
