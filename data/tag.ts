export const allTags = [
{ id: 'no-license-required', label:'ライセンス不要'},
{ id: 'photo', label:'写真'},
{ id: 'illuste', label:'イラスト'},
{ id: 'icon', label:'アイコン'},
{ id: 'public-domain', label:'パブリックドメイン'},
{ id: 'free', label:'無料'},
{ id: 'video', label:'ビデオ'},
] as const;

export type TagId = typeof allTags[number]['id'];