import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoBlockInfoBlock extends Schema.Component {
  collectionName: 'components_info_block_info_blocks';
  info: {
    displayName: 'InfoBlock';
  };
  attributes: {
    NameBlock: Attribute.String;
    LineInfoBlock: Attribute.Component<'line-info-block.line-info-block', true>;
  };
}

export interface LineInfoBlockLineInfoBlock extends Schema.Component {
  collectionName: 'components_line_info_block_line_info_blocks';
  info: {
    displayName: 'LineInfoBlock';
    description: '';
  };
  attributes: {
    NameLink: Attribute.String;
    LinkTo: Attribute.String;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    MenuText: Attribute.String;
    MenuLink: Attribute.String;
  };
}

export interface PreviewPreview extends Schema.Component {
  collectionName: 'components_preview_previews';
  info: {
    displayName: 'Grid Preview';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Columns: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'col13'>;
    Media: Attribute.Component<'preview.thumbnail-block', true>;
    startColumn: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11'
      ]
    > &
      Attribute.DefaultTo<'col1'>;
  };
}

export interface PreviewThumbnailBlock extends Schema.Component {
  collectionName: 'components_thumbnail_block_thumbnail_blocks';
  info: {
    displayName: 'Preview Media Block';
    description: '';
  };
  attributes: {
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Columns: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13'
      ]
    > &
      Attribute.DefaultTo<'col1'>;
    AspectRatio: Attribute.Enumeration<
      [
        'aspect-16_9',
        'aspect-9_16',
        'aspect-4_3',
        'aspect-3_4',
        'aspect-4_5',
        'aspect-5_4',
        'aspect-1_85',
        'aspect-2_35',
        'aspect-2_39',
        'aspect-2_40'
      ]
    >;
  };
}

export interface SlideSlide extends Schema.Component {
  collectionName: 'components_slide_slides';
  info: {
    displayName: 'Slide';
    description: '';
  };
  attributes: {
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    DescriptionMedia: Attribute.String;
    proyecto: Attribute.Relation<
      'slide.slide',
      'oneToOne',
      'api::proyecto.proyecto'
    >;
  };
}

export interface ViewProjectBlock extends Schema.Component {
  collectionName: 'components_thumbnail_block_project_blocks';
  info: {
    displayName: 'Project Media block';
    description: '';
  };
  attributes: {
    Media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Columns: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13'
      ]
    >;
    AspectRatio: Attribute.Enumeration<
      [
        'aspect-16_9',
        'aspect-9_16',
        'aspect-4_3',
        'aspect-3_4',
        'aspect-4_5',
        'aspect-5_4',
        'aspect-1_85',
        'aspect-2_35',
        'aspect-2_39',
        'aspect-2_40'
      ]
    >;
    Leyenda: Attribute.Text;
    autoplay: Attribute.Boolean;
    Poster: Attribute.Media<'images'>;
  };
}

export interface ViewProjectView2 extends Schema.Component {
  collectionName: 'components_view_project_view2s';
  info: {
    displayName: 'Grid Project';
    description: '';
  };
  attributes: {
    Columns: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13'
      ]
    >;
    GridView: Attribute.Component<'view.project-block', true>;
    startColumn: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11'
      ]
    >;
    endColumn: Attribute.Enumeration<
      [
        'col1',
        'col2',
        'col3',
        'col4',
        'col5',
        'col6',
        'col7',
        'col8',
        'col9',
        'col10',
        'col11',
        'col12',
        'col13',
        'col14'
      ]
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'info-block.info-block': InfoBlockInfoBlock;
      'line-info-block.line-info-block': LineInfoBlockLineInfoBlock;
      'menu.menu': MenuMenu;
      'preview.preview': PreviewPreview;
      'preview.thumbnail-block': PreviewThumbnailBlock;
      'slide.slide': SlideSlide;
      'view.project-block': ViewProjectBlock;
      'view.project-view2': ViewProjectView2;
    }
  }
}
