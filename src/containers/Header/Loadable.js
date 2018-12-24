import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "header" */ './index'),
  loading: Loading,
  modules: ['header']
})
