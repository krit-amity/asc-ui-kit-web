export { default as AmityUiKitProvider } from '~/core/providers/UiKitProvider';
export { default as AmityUiKitFeed } from '~/social/components/Feed';
export { default as AmityUiKitSocial } from '~/social/pages/Application';
export { default as AmityUiKitChat } from '~/chat/pages/Application';

// Export helper
export {
  createNewChat as amityCreateNewChat,
  addChatMembers as amityAddChatMembers,
  removeChatMembers as amityRemoveChatMembers,
} from '~/chat/helpers';

export { useSDK as useAmitySDK } from '~/core/hocs/withSDK';
export { default as useAmityUser } from '~/core/hooks/useUser';
export { useNavigation as useAmityNavigation } from '~/social/providers/NavigationProvider';

export { default as AmityAvatar } from '~/core/components/Avatar';
export { PostContainer as AmityPostContainer } from '~/social/components/post/Post/styles';
export { default as AmityPostEngagementBar } from '~/social/components/EngagementBar';
export { default as AmityExpandableText } from '~/social/components/Comment/CommentText';

// import AmityComment from './components/Comment';
// import AmityCommentComposeBar from './components/CommentComposeBar';
// import AmityCommentLikeButton from './components/CommentLikeButton';
// import AmityCommunity from './components/Community';
// import AmityCommunityItem from './components/CommunityItem';
// import AmityEmptyFeed from './components/EmptyFeed';
// import AmityFiles from './components/Files';
// import AmityImageGallery from './components/ImageGallery';
// import AmityImages from './components/Images';
// import AmityMessage from './components/Message';
// import AmityMessageComposeBar from './components/MessageComposeBar';
// import AmityMessageList from './components/MessageList';
// import AmityPost from './components/Post';
// import AmityPostCreator from './components/PostCreator';
// import AmityPostLikeButton from './components/PostLikeButton';
// import AmityRecentChat from './components/RecentChat';
// import AmitySideMenu from './components/SideMenu';

export { default as Button } from '~/core/components/Button';

export { PageTypes } from '~/social/constants';

export { default as MainLayout } from '~/social/layouts/Main';

export { default as CommunitySideMenu } from '~/social/components/CommunitySideMenu';

export { default as ExplorePage } from '~/social/pages/Explore';
export { default as NewsFeedPage } from '~/social/pages/NewsFeed';
export { default as CommunityFeedPage } from '~/social/pages/CommunityFeed';
export { default as UserFeedPage } from '~/social/pages/UserFeed';
export { default as CategoryCommunitiesPage } from '~/social/pages/CategoryCommunities';
export { default as CommunityEditPage } from '~/social/pages/CommunityEdit';
export { default as ProfileSettings } from '~/social/components/ProfileSettings';

export { useNavigation } from '~/social/providers/NavigationProvider';
export { useSDK } from '~/core/hocs/withSDK';

export * as Icons from '~/icons';
export { default as UiKitSocialSearch } from '~/social/components/SocialSearch';
export { default as customizableComponent } from '~/core/hocs/customization';
