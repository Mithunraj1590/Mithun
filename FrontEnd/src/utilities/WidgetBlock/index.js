import Block from "./Block";

const WidgetBlocks = ({
  widgets = [],
  
}) => {
    
  const child = widgets.map((widget) => (
    <Block
      key={widget.id}
      widget={widget}
    />
  ));
  
  return child;
  
};

export default WidgetBlocks;
