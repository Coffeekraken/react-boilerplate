import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "counter" */ './index'),
  loading: Loading,
  modules: ['counter']
})
