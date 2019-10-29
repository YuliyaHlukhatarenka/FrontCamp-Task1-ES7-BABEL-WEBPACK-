import getChanels from './getChanels';
import showChanels from './showChanels';

getChanels().then(response => showChanels(response));
