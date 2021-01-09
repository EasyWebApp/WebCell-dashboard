import { component, mixin, createCell, Fragment } from 'web-cell';
import { observer } from 'mobx-web-cell';
import { Button } from 'boot-cell/source/Form/Button';
import { DropMenu } from 'boot-cell/source/Navigator/DropMenu';
import { Table, TableRow } from 'boot-cell/source/Content/Table';
import { FAIcon } from 'boot-cell/source/Reminder/FAIcon';
import Chart from 'chart.js';

import { PageFrame } from '../component/PageFrame';
import menu from './menu.json';
import { content } from '../model';

@observer
@component({
    tagName: 'dash-board',
    renderTarget: 'children'
})
export class DashBoard extends mixin() {
    connectedCallback() {
        content.getPaths();

        super.connectedCallback();
    }

    renderChart = (canvas: HTMLCanvasElement) =>
        new Chart(canvas, {
            type: 'line',
            data: {
                labels: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                datasets: [
                    {
                        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
                        lineTension: 0,
                        backgroundColor: 'transparent',
                        borderColor: '#007bff',
                        borderWidth: 4,
                        pointBackgroundColor: '#007bff'
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false
                            }
                        }
                    ]
                },
                legend: {
                    display: false
                }
            }
        });

    render() {
        return (
            <PageFrame menu={menu}>
                <header className="d-flex flex-wrap align-items-center border-bottom mb-3">
                    <h1>DashBoard</h1>

                    <div className="btn-group ml-auto mr-3">
                        <Button color="secondary" size="sm" outline>
                            Share
                        </Button>
                        <Button color="secondary" size="sm" outline>
                            Export
                        </Button>
                    </div>
                    <DropMenu
                        caption={
                            <>
                                <FAIcon name="calendar" className="mr-2" />
                                This week
                            </>
                        }
                        buttonColor="secondary"
                        buttonSize="sm"
                        alignType="right"
                    />
                </header>

                <canvas
                    style={{ width: '100%', height: '80vh' }}
                    ref={this.renderChart}
                />
                <h2 className="mt-3">Contents</h2>

                <Table striped hover center>
                    <TableRow type="head">
                        <th>Type</th>
                        <th>Name</th>
                        <th>Path</th>
                        <th>Size</th>
                        <th>SHA</th>
                    </TableRow>

                    {content.list.map(
                        ({ type, html_url, name, path, size, sha }) => (
                            <TableRow>
                                <td>
                                    <FAIcon
                                        name={type === 'dir' ? 'folder' : type}
                                    />
                                    <span className="sr-only">{type}</span>
                                </td>
                                <td>
                                    <a target="_blank" href={html_url}>
                                        {name}
                                    </a>
                                </td>
                                <td>{path}</td>
                                <td className="text-right">{size}</td>
                                <td>{sha}</td>
                            </TableRow>
                        )
                    )}
                </Table>
            </PageFrame>
        );
    }
}
