select item from asset
where user_id = 'zaki';

select u.user_id, a.item as items
from users u
join asset a on a.user_id = u.user_id;