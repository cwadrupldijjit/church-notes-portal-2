import { Status, StatusModel } from '../../schema';
import { getBasicFixtureRunner } from '../basic-fixture';

const data: Status[] = [
    { name: 'Pending' },
    { name: 'Active' },
    { name: 'Inactive' },
    { name: 'Deleted' },
    { name: 'Hold' },
];

const run = getBasicFixtureRunner(data, StatusModel);

export default run;