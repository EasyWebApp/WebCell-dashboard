import { Button, FloatingLabel, FormControl } from 'boot-cell';
import { formToJSON } from 'web-utility';

import { Downloader } from '../component/Downloader';
import { PageFrame } from '../component/PageFrame';
import { downloader } from '../model';
import menu from './menu.json';

const addTask = async (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const { path } = formToJSON(form);

    await downloader
        .createTask(path as string)
        .start({ chunkSize: 1024 ** 2 / 2 });

    form.reset();
};

export default () => (
    <PageFrame menu={menu}>
        <h1 className="my-4">Downloader</h1>

        <form
            className="d-flex align-items-center gap-3 mb-3"
            onSubmit={addTask}
        >
            <FloatingLabel className="flex-fill" label="URL">
                <FormControl
                    placeholder="URL"
                    type="url"
                    name="path"
                    required
                />
            </FloatingLabel>

            <Button type="submit" variant="primary">
                +
            </Button>
        </form>

        <Downloader />
    </PageFrame>
);
