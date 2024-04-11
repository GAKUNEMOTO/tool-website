export const allTags = [
{ id: 'no-license-required', label:'ライセンス不要'},
{ id: 'photo', label:'写真'},
{ id: 'illuste', label:'イラスト'},
{ id: 'icon', label:'アイコン'},
{ id: 'public-domain', label:'パブリックドメイン'},
{ id: 'free', label:'無料'},
{ id: 'video', label:'ビデオ'},
{ id: 'font', label:'フォント'},
{ id: 'icon-font', label:'アイコンフォント'},
{ id: 'audio', label:'音素材'},
{ id: 'ui', label:'UI素材'},
] as const;

export type TagId = typeof allTags[number]['id'];


export const mainTAGS: TagId[] = [
    'illuste',
    'photo',
    'icon',
    'font',
    'icon-font',
    'audio',
    'ui',
    ];