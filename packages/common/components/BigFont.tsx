import { ReactNode } from "react";

const BigFont = ({ children }: { children: ReactNode }) => (
    <div style={{ fontSize: '50px', fontWeight: 600 }}>
        { children }
    </div>
);

export default BigFont;
