/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MembershipType } from './MembershipType';
import type { SimpleSeason } from './SimpleSeason';

export type Membership = {
    uuid: string;
    season: SimpleSeason;
    type: MembershipType;
    /**
     * Campo que muestra si la membresía es recurrente.
     */
    is_recurrent?: boolean;
};

