-- weather_types
INSERT INTO weather_types (id, name) VALUES
('cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54','晴れ'),
('0f742b2e-e147-ba50-bb44-a42bd083b64e','曇り'),
('b47687ca-3bda-2e2f-e1a8-135d9f3d77c6','雨');

-- topics
INSERT INTO topics VALUES
('2f968861-5e43-b246-1118-f86f6f9a1913','近所の公園まで歩いて赤いものを探してみよう'),
('b20aeff3-3fe2-7e8d-6138-6f9cba489f1f','コンビニを1つ通り過ぎて面白い看板を見つけよう'),
('f67d2fdb-326e-5fb9-ca9b-a4779cc98324','信号を3回渡って猫がいそうな場所を探してみよう'),
('1914b01a-e6e6-5b9b-7107-a308d4f91adf','10分間曲がらずにまっすぐ進んで落ち葉を1枚拾ってみよう'),
('b37d1dfa-ed7b-8b70-99c7-5abcb547035a','学校や公民館の前を通って静かな場所で深呼吸してみよう'),
('2ea0d7cd-0f84-9c67-6419-f385254f6379','大通りを避けて裏道を選んで良い匂いがするお店を探そう'),
('9b1f8528-5ac3-0cd3-f603-53f71735cba6','川沿いに沿って歩いて変わった形の雲を探そう'),
('545c3d06-3f1c-f732-2683-450b92cd8254','交差点を5つ通り過ぎて面白い名前の店を見つけよう'),
('b73245a1-ecdd-060d-b719-5c1513346be9','地図を見ずに適当に歩いて気になるポストを探そう'),
('6c45af08-f1e4-53a3-d089-22a2e7ad327b','1人ですれ違う人を10人数えて気に入った建物を見つけよう');

-- topic_weathers
INSERT INTO topic_weathers  VALUES
('2f968861-5e43-b246-1118-f86f6f9a1913','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('2f968861-5e43-b246-1118-f86f6f9a1913','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('2f968861-5e43-b246-1118-f86f6f9a1913','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('b20aeff3-3fe2-7e8d-6138-6f9cba489f1f','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('b20aeff3-3fe2-7e8d-6138-6f9cba489f1f','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('b20aeff3-3fe2-7e8d-6138-6f9cba489f1f','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('f67d2fdb-326e-5fb9-ca9b-a4779cc98324','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('f67d2fdb-326e-5fb9-ca9b-a4779cc98324','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('f67d2fdb-326e-5fb9-ca9b-a4779cc98324','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('1914b01a-e6e6-5b9b-7107-a308d4f91adf','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('1914b01a-e6e6-5b9b-7107-a308d4f91adf','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('1914b01a-e6e6-5b9b-7107-a308d4f91adf','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('b37d1dfa-ed7b-8b70-99c7-5abcb547035a','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('b37d1dfa-ed7b-8b70-99c7-5abcb547035a','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('2ea0d7cd-0f84-9c67-6419-f385254f6379','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('2ea0d7cd-0f84-9c67-6419-f385254f6379','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('9b1f8528-5ac3-0cd3-f603-53f71735cba6','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54'),
('545c3d06-3f1c-f732-2683-450b92cd8254','0f742b2e-e147-ba50-bb44-a42bd083b64e'),
('b73245a1-ecdd-060d-b719-5c1513346be9','b47687ca-3bda-2e2f-e1a8-135d9f3d77c6'),
('6c45af08-f1e4-53a3-d089-22a2e7ad327b','cc7a0a0d-f3e1-0b59-9f8d-7674ff94ed54');