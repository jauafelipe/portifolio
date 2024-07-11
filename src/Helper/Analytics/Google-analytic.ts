import ReactGa from "react-ga"


export const initiGa= () => {
    ReactGa.initialize("G-VPC3ZMDVLS")
}

export const logPageView =() => {
    ReactGa.set({page: window.location.pathname})
    ReactGa.pageview(window.location.pathname)
}

export const logEvent = (category:string, action:string, label: string) => {
    if(category && action) {
        ReactGa.event({
            category: category,
            action: action,
            label: label
        })
    }
}