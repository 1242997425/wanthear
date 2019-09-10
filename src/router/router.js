import home from "../views/home";
import fenlei from "../views/fenlei";
import remen from "../views/remen";
import jingpin from "../views/jingpin";
import my from "../views/my";
let router = [
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:home,
        children:[
            {
                path:"/home",
                redirect:"/home/remen",
            },
            {
                path:"/home/fenlei",
                component:fenlei
            },
            {
                path:"/home/remen",
                component:remen
            },
            {
                path:"/home/jingpin",
                component:jingpin 
            },
            {
                path:"/home/my",
                component:my 
            },
        ]
    }
]
export default router;