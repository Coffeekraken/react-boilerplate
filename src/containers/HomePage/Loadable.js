import loadable from "loadable-components"

const Homepage = loadable(() => import("./index"), {
})
export default Homepage
