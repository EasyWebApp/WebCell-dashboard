import { component, mixin, createCell } from 'web-cell';

import { PageFrame } from '../component/PageFrame';
import menu from './menu.json';

@component({
    tagName: 'dash-board',
    renderTarget: 'children'
})
export class DashBoard extends mixin() {
    render() {
        return <PageFrame menu={menu} />;
    }
}
