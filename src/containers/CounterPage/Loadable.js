import Loadable from 'react-loadable'
import Loading from '../../components/Loading'
export default Loadable({
  loader: () => import(/* webpackChunkName: "counterpage" */ './index'),
  loading: Loading,
  modules: ['counterpage']
})
