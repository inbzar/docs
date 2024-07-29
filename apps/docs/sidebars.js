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
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features/index',
      },
      customProps: {
        sidebar_icon: 'puzzle',
      },
      className: 'homepage-sidebar-item',
      items: [
        {
          type: 'doc',
          id: 'features/regions-and-currencies',
          label: 'Regions and Currencies',
          customProps: {
            iconName: 'shopping-cart',
            exclude_from_doc_list: true,
          },
        },
        {
          type: 'doc',
          id: 'features/customers',
          label: 'Customers',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/products',
          label: 'Products',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/carts-and-checkout',
          label: 'Carts and Checkout',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/orders',
          label: 'Orders',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/multiwarehouse',
          label: 'Multi-Warehouse',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/taxes',
          label: 'Taxes',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/discounts',
          label: 'Discounts',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/gift-cards',
          label: 'Gift Cards',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/price-lists',
          label: 'Price Lists',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/sales-channels',
          label: 'Sales Channels',
          customProps: {
            iconName: 'building-storefront',
          },
        },
        {
          type: 'doc',
          id: 'features/users',
          label: 'Users',
          customProps: {
            iconName: 'building-storefront',
          },
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
