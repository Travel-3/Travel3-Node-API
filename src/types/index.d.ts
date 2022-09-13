import { Context } from '../Context';
import { Auth } from '../resources/Auth';
import { Event } from '../resources/Event';
import Admin from '../resources/Admin';

declare const Travel3: {
    Auth: typeof Auth;
    Event: typeof Event;
    Context: typeof Context;
    Admin: typeof Admin;
};
export default Travel3;
