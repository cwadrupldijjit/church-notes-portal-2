import { RoleModel, Role } from '../../schema';
import { getBasicFixtureRunner } from '../basic-fixture';

const data: Role[] = [
    { name: 'Admin' },
    { name: 'Member' },
    { name: 'Guest' },
];

const run = getBasicFixtureRunner(data, RoleModel);

export default run;