import IcomoonReact from "icomoon-react";
import type { FC, CSSProperties } from "react";
import { forwardRef } from "react";

import iconSet from "./selection.json";

interface IconProps {
  color?: string;
  size?: string | number;
  icon?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  iconSet?: Object;
  className?: string;
  style?: CSSProperties;
  [x: string]: unknown;
}

const Icon: FC<IconProps> = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { color, size = "100%", style = {}, icon = "", className = "" } = props;

  return (
    <IcomoonReact
      ref={ref}
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      style={style}
      icon={icon}
      {...props}
    />
  );
});

Icon.displayName = "Icon";

export default Icon;
