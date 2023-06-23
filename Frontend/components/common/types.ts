export interface IButton {
    btnText: string;
    textColor?: string;
    bgColor?: string;
    width?: string;
    height?: string;
    onClick?: () => void;
    type?: any;
    icon?: JSX.Element;
    iconRight?: JSX.Element;
    disabled?: boolean;
    isLoading?: boolean;
    ref?: any;
    form?: string;
    className?: string;
    border?: string;
  }