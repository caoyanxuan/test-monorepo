import React, { ReactNode } from "react";
import { Button } from 'antd';

const OldButton = ({ children }: { children: ReactNode }) => (
    <Button>{children}</Button>
);

export default OldButton;
