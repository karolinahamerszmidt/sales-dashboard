/// <reference types="styled-components/cssprop"/>
import "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        colors: Record<
        'background',
        string
        >;
    }
}