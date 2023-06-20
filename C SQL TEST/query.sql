SELECT item FROM asset
WHERE user_id = 'zaki';

SELECT u.user_id, STRING_AGG(a.item, ', ') AS items
FROM users u
JOIN asset a ON a.user_id = u.user_id
GROUP BY u.user_id;