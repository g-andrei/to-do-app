interface Item<T> {
    [key: string]: T;
}

export interface Colors {
    white: string;
    black: string;
    text: Item<string>;
    state: Item<string>;
    surfaces: Item<string>;
    scrollBar: Item<string>;
}

export interface Spacings {
    main: Item<string>;
}

export interface Sizes {
    main: Item<string>;
}

export interface Typography {
    title: Item<Item<string>>;
    paragraph: Item<Item<string>>;
    button: Item<Item<string>>;
}

export interface Breakpoints {
    desktop: Item<string>;
    mobile: Item<string>;
}

export interface FontStyleProperties {
    text: string;
}

export interface FontStyleSizes {
    text: Item<string>;
}

export interface FontWeightProperties {
    regular: string;
    medium: string;
    bold: string;
    extraBold: string;
}

export interface LineHeightSizes {
    text: Item<string>;
}

export interface Themes {
    colors: Colors;
    spacings: Spacings;
    sizes: Sizes;
    typography: Typography;
    breakpoints: Breakpoints;
    fontFamily: FontStyleProperties;
    fontSize: FontStyleSizes;
    fontWeight: FontWeightProperties;
    lineHeight: LineHeightSizes;
}
