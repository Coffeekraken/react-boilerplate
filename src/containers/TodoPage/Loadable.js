import Loadable from 'react-loadable'
import Loading from '@/components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "todopage" */ './index'),
  loading: Loading,
  modules: ['todopage']
})
