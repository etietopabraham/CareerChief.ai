import React,{Fragment} from "react";
import {Spinner} from "@chakra-ui/react";
import { IButton } from "../types";
import { ButtonStyles, Center } from "./styles";

const Button = ({
  btnText,
  textColor,
  bgColor,
  width,
  height,
  onClick,
  type,
  icon,
  iconRight,
  disabled,
  isLoading,
  ref,
  form,
  className,
  border,
}: IButton) => {
  return (
    <ButtonStyles
      textColor={textColor}
      bgColor={bgColor}
      width={width}
      height={height}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
      ref={ref}
      form={form}
      className={className}
      border={border}
    >
      {isLoading ? <Center><Spinner/></Center> : (
        <Fragment>
        {icon && icon}
        {btnText}
        {iconRight && iconRight}
        </Fragment>
      )}
    </ButtonStyles>
  );
};

export default Button;
