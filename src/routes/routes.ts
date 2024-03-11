import type {Route} from "../types/route.type.ts";
export const route: Record<Route, string> = {
    main: '/',
    basket: '/basket',
    goods: '/goods/:id'
}
