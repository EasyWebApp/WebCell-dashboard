import { Button, DropdownButton, Icon, Table } from 'boot-cell';
import Chart from 'chart.js';
import { component, observer } from 'web-cell';

import { PageFrame } from '../component/PageFrame';
import { content, Content } from '../model';
import menu from './menu.json';

@component({ tagName: 'dash-board' })
@observer
export class DashBoard extends HTMLElement {
    connectedCallback() {
        content.getPaths();
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

    renderRow = ({ type, html_url, name, path, size, sha }: Content) => (
        <tr>
            <td>
                <Icon name={type === 'dir' ? 'folder' : type} />
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
        </tr>
    );

    render() {
        console.log(menu);

        return (
            <PageFrame menu={menu}>
                <header className="d-flex flex-wrap align-items-center border-bottom mb-3">
                    <h1>DashBoard</h1>

                    <div className="btn-group ml-auto mr-3">
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
                                <Icon name="calendar" className="mr-2" />
                                This week
                            </>
                        }
                        variant="secondary"
                        size="sm"
                    />
                </header>

                <canvas
                    style={{ width: '100%', height: '80vh' }}
                    ref={this.renderChart}
                />
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
