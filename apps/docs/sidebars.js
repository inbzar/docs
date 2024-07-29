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
        {
          type: 'doc',
          id: 'recipes/subscriptions',
          label: 'Subscriptions',
          customProps: {
            iconName: 'credit-card-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/integrate-ecommerce-stack',
          label: 'Integrate Ecommerce Stack',
          customProps: {
            iconName: 'puzzle-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/commerce-automation',
          label: 'Commerce Automation',
          customProps: {
            iconName: 'clock-solid-mini',
          },
        },
        {
          type: 'doc',
          id: 'recipes/oms',
          label: 'Order Management System',
          customProps: {
            iconName: 'check-circle-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/pos',
          label: 'POS',
          customProps: {
            iconName: 'computer-desktop-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/digital-products',
          label: 'Digital Products',
          customProps: {
            iconName: 'photo-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/personalized-products',
          label: 'Personalized Products',
          customProps: {
            iconName: 'swatch-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/b2b',
          label: 'B2B',
          customProps: {
            iconName: 'building-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/multi-region',
          label: 'Multi-Region Store',
          customProps: {
            iconName: 'globe-europe-solid',
          },
        },
        {
          type: 'doc',
          id: 'recipes/omnichannel',
          label: 'Omnichannel Store',
          customProps: {
            iconName: 'channels-solid',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/taxes/taxes',
          label: 'Taxes',
        },
        {
          type: 'doc',
          id: 'modules/taxes/inclusive-pricing',
          label: 'Tax Inclusive Pricing',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/taxes/admin/manage-tax-settings',
          label: 'Admin: Manage Taxes',
        },
        {
          type: 'doc',
          id: 'modules/taxes/admin/manage-tax-rates',
          label: 'Admin: Manage Tax Rates',
        },
        {
          type: 'doc',
          id: 'modules/taxes/storefront/manual-calculation',
          label: 'Storefront: Calculate Taxes',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/discounts/discounts',
          label: 'Discounts',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/discounts/admin/manage-discounts',
          label: 'Admin: Manage Discounts',
        },
        {
          type: 'doc',
          id: 'modules/discounts/storefront/use-discounts-in-checkout',
          label: 'Storefront: Discounts in Checkout',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/gift-cards/gift-cards',
          label: 'Gift Cards',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/gift-cards/backend/send-gift-card-to-customer',
          label: 'Backend: Send Gift Card Code',
        },
        {
          type: 'doc',
          id: 'modules/gift-cards/admin/manage-gift-cards',
          label: 'Admin: Manage Gift Cards',
        },
        {
          type: 'doc',
          id: 'modules/gift-cards/storefront/use-gift-cards',
          label: 'Storefront: Use Gift Cards',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/price-lists/price-lists',
          label: 'Price Lists',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/price-lists/admin/manage-price-lists',
          label: 'Admin: Manage Price Lists',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/sales-channels/sales-channels',
          label: 'Sales Channels',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/sales-channels/admin/manage',
          label: 'Admin: Manage Sales Channels',
        },
        {
          type: 'doc',
          id: 'modules/sales-channels/storefront/use-sales-channels',
          label: 'Storefront: Use Sales Channels',
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
        {
          type: 'html',
          value: 'Architecture',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/users/users',
          label: 'Users and Invites',
        },
        {
          type: 'html',
          value: 'How-to',
          customProps: {
            sidebar_is_group_divider: true,
          },
        },
        {
          type: 'doc',
          id: 'modules/users/backend/send-invite',
          label: 'Backend: Send Invite',
        },
        {
          type: 'doc',
          id: 'modules/users/backend/rbac',
          label: 'Backend: Implement RBAC',
        },
        {
          type: 'doc',
          id: 'modules/users/admin/manage-profile',
          label: 'Admin: Implement Profiles',
        },
        {
          type: 'doc',
          id: 'modules/users/admin/manage-users',
          label: 'Admin: Manage Users',
        },
        {
          type: 'doc',
          id: 'modules/users/admin/manage-invites',
          label: 'Admin: Manage Invites',
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
