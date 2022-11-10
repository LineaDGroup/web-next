import { ComponentConfig } from "./shared";

export default interface SectionConfig extends ComponentConfig{
    backgroundImage?: string;
    maxWidth?: string;
    showBackdrop?: boolean;
}