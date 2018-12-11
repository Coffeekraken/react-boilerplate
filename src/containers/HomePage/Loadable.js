import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './index'),
  loading: Loading,
  modules: ['homepage']
})
