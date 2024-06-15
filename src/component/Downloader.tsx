import { FC, observer } from 'web-cell';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Icon,
    ProgressBar
} from 'boot-cell';
import { DownloadTask } from 'mobx-restful';

import { downloader } from '../model';

export const DTCard: FC<{ task: DownloadTask }> = observer(({ task }) => (
    <Card>
        <CardBody>
            <CardTitle>{task.name}</CardTitle>
            <ProgressBar
                striped={task.percent < 100}
                animated={task.executing}
                now={task.percent}
                label
            />
        </CardBody>
        <CardFooter className="d-flex justify-content-between align-items-center">
            <small>
                {task.loadedSize.toShortString()} /{' '}
                {task.totalSize.toShortString()}
            </small>
            <div className="d-flex gap-3">
                {task.percent < 100 &&
                    (task.executing ? (
                        <Button
                            size="sm"
                            variant="warning"
                            onClick={() => task.pause()}
                        >
                            <Icon name="pause" />
                        </Button>
                    ) : (
                        <Button
                            size="sm"
                            variant="success"
                            onClick={() => task.start()}
                        >
                            <Icon name="play" />
                        </Button>
                    ))}
                <Button
                    size="sm"
                    variant="danger"
                    disabled={task.executing}
                    onClick={() => downloader.destroyTask(task.name)}
                >
                    <Icon name="trash" />
                </Button>
            </div>
        </CardFooter>
    </Card>
));

export const Downloader: FC = observer(() => (
    <ol className="list-unstyled d-flex flex-column gap-3">
        {downloader.tasks.map(task => (
            <li key={task.id}>
                <DTCard task={task} />
            </li>
        ))}
    </ol>
));
