import { Button, DropdownButton, Icon, Table } from 'boot-cell';
import 'echarts-jsx/dist/charts/line';
import 'echarts-jsx/dist/components/x-axis';
import 'echarts-jsx/dist/components/y-axis';
import 'echarts-jsx/dist/renderers/SVG';
import { component, observer } from 'web-cell';

import { PageFrame } from '../component/PageFrame';
import { content, Content } from '../model';
import menu from './menu.json';

@component({ tagName: 'dash-board' })
@observer
export default class DashBoard extends HTMLElement {
    connectedCallback() {
        content.getPaths();
    }

    renderRow = ({ type, html_url, name, path, size, sha }: Content) => (
        <tr key={name}>
            <td>
                <Icon name={type === 'dir' ? 'folder' : type} />
                <span className="sr-only ms-2">{type}</span>
            </td>
            <td>
                <a target="_blank" href={html_url}>
                    {name}
                </a>
            </td>
            <td>{path}</td>
            <td className="text-right">{size}</td>
            <td>{sha}</td>
        </tr>
    );

    render() {
        return (
            <PageFrame menu={menu}>
                <header className="d-flex flex-wrap align-items-center gap-3 border-bottom mb-3">
                    <h1>WebCell-dashboard</h1>

                    <div className="btn-group">
                        <Button variant="outline-secondary" size="sm">
                            Share
                        </Button>
                        <Button variant="outline-secondary" size="sm">
                            Export
                        </Button>
                    </div>
                    <DropdownButton
                        caption={
                            <>
                                <Icon name="calendar" className="me-2" />
                                This week
                            </>
                        }
                        variant="secondary"
                        size="sm"
                    />
                </header>

                <ec-svg-renderer>
                    <ec-x-axis
                        type="category"
                        data={[
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday'
                        ]}
                    />
                    <ec-y-axis type="value" />
                    <ec-line-chart
                        data={[15339, 21345, 18483, 24003, 23489, 24092, 12034]}
                    />
                </ec-svg-renderer>

                <h2 className="mt-3">Contents</h2>

                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Path</th>
                            <th>Size</th>
                            <th>SHA</th>
                        </tr>
                    </thead>
                    <tbody>{content.list.map(this.renderRow)}</tbody>
                </Table>
            </PageFrame>
        );
    }
}
