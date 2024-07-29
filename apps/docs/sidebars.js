/**
 * Custom sidebar definitions:
 * - To declare a sidebar element as part of the homepage sidebar, add className: 'homepage-sidebar-item'
 * - To add an icon:
 *   - add the icon in www/docs/src/theme/Icon/<IconName>/index.ts as a React SVG element if it doesn't exist, where `<IconName>` is the camel case name of the icon
 *   - add the mapping to the icon in www/docs/src/theme/Icon/index.js
 *   - add in customProps sidebar_icon: 'icon-name'
 * - To add a group divider add in customProps sidebar_is_group_divider: true and set the label/value to the title that should appear in the divider.
 * - To add a back item, add in customProps:
 *   - sidebar_is_back_link: true
 *   - sidebar_icon: `back-arrow`
 * - To add a sidebar title, add in customProps sidebar_is_title: true
 * - To add a group headline, add in customProps sidebar_is_group_headline: true
 * - To add a coming soon link (with a badge), add in customProps sidebar_is_soon: true
 * - To add a badge, add in customProps sidebar_badge with its value being the props to pass to the Badge component.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  homepage: [
    {
      type: 'doc',
      id: 'homepage',
      label: 'Overview',
      customProps: {
        sidebar_icon: 'book-open',
      },
      className: 'homepage-sidebar-item',
    },
    {
      type: 'doc',
      id: 'create-medusa-app',
      label: 'Create InBzar App',
      customProps: {
        sidebar_icon: 'rocket-launch',
      },
      className: 'homepage-sidebar-item',
    },
    {
      type: 'category',
      label: 'Recipes',
      link: {
        type: 'doc',
        id: 'recipes/index',
      },
      customProps: {
        sidebar_icon: 'newspaper',
      },
      className: 'homepage-sidebar-item',
      items: [
        {
          type: 'doc',
          id: 'recipes/ecommerce',
          label: 'Ecommerce',
          customProps: {
            iconName: 'shopping-cart',
            exclude_from_doc_list: true,
          },
        },
        {
          type: 'doc',
          id: 'recipes/marketplace',
          label: 'Marketplace',
          customProps: {
            iconName: 'building-storefront',
          },
        },
      ],
    },
    {
      type: 'html',
      value: 'Browse Docs',
      customProps: {
        sidebar_is_group_divider: true,
      },
      className: 'homepage-sidebar-item',
    },
    {
      type: 'ref',
      id: 'modules/overview',
      label: 'Commerce Modules',
      customProps: {
        sidebar_icon: 'puzzle',
      },
      className: 'homepage-sidebar-item',
    },
    {
      type: 'doc',
      id: 'glossary',
      label: 'Glossary',
      customProps: {
        sidebar_icon: 'book-open',
      },
      className: 'homepage-sidebar-item',
    },
  ],
  modules: [
    {
      type: 'ref',
      id: 'homepage',
      label: 'Back to home',
      customProps: {
        sidebar_is_back_link: true,
        sidebar_icon: 'back-arrow',
      },
    },
    {
      type: 'doc',
      id: 'modules/overview',
      label: 'Commerce Modules',
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: 'puzzle',
      },
    },
    {
      type: 'category',
      label: 'Regions and Currencies',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/regions-and-currencies/overview',
          label: 'Overview',
        }
      ],
    },
    {
      type: 'category',
      label: 'Customers',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/customers/overview',
          label: 'Overview',
        }
      ],
    },
    {
      type: 'category',
      label: 'Products',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/products/overview',
          label: 'Overview',
        }
      ],
    },
    {
      type: 'category',
      label: 'Carts and Checkout',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/carts-and-checkout/overview',
          label: 'Overview',
        }
      ],
    },
    {
      type: 'category',
      label: 'Orders',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/orders/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Multi-Warehouse',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/multiwarehouse/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Taxes',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/taxes/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Discounts',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/discounts/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Gift Cards',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/gift-cards/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Price Lists',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/price-lists/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Sales Channels',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/sales-channels/overview',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Users',
      collapsible: false,
      customProps: {
        sidebar_is_group_headline: true,
      },
      items: [
        {
          type: 'doc',
          id: 'modules/users/overview',
          label: 'Overview',
        },
      ],
    },
  ],
  userGuideSidebar: [
    {
      type: 'doc',
      id: 'user-guide',
      label: 'User Guide',
      customProps: {
        sidebar_is_title: true,
        sidebar_icon: 'user',
      },
    },
    {
      type: 'autogenerated',
      dirName: 'user-guide',
    },
  ],
}
