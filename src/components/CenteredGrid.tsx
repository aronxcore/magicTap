import { ReactNode } from "react";

interface CenteredGridProps {
  children: ReactNode;
  cols?: number;
}

/**
 * A 4-column grid where the last row is centered if it has fewer items.
 */
const CenteredGrid = ({ children, cols = 4 }: CenteredGridProps) => {
  const items = Array.isArray(children) ? children : [children];
  const remainder = items.length % cols;
  const mainItems = remainder === 0 ? items : items.slice(0, items.length - remainder);
  const lastRowItems = remainder === 0 ? [] : items.slice(items.length - remainder);

  return (
    <div>
      <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-3 md:gap-4`}>
        {mainItems}
      </div>
      {lastRowItems.length > 0 && (
        <div className={`flex flex-wrap justify-center gap-3 md:gap-4 mt-3 md:mt-4`}>
          {lastRowItems.map((item, i) => (
            <div key={i} className="w-[calc(50%-6px)] md:w-[calc(25%-12px)]">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CenteredGrid;
