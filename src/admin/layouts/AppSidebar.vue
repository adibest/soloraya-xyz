<template>
  <nav id="mainnav-container">
    <div id="mainnav">


      <!--OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION-->
      <!--It will only appear on small screen devices.-->
      <!--================================
      <div class="mainnav-brand">
        <a href="index.html" class="brand">
          <img :src="`${publicPath}admin-template/get-started/img/logo.png`" alt="Nifty Logo" class="brand-icon">
          <span class="brand-text">Nifty</span>
        </a>
        <a  class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
      </div>
      -->



      <!--Menu-->
      <!--================================-->
      <div id="mainnav-menu-wrap">
        <div class="nano">
          <div class="nano-content">

            <!--Profile Widget-->
            <!--================================-->
            <div id="mainnav-profile" class="mainnav-profile">
              <div class="profile-wrap text-center">
                <div class="pad-btm">
                  <img class="img-circle img-md" :src="`${publicPath}admin-template/get-started/img/profile-photos/1.png`" alt="Profile Picture">
                </div>
                <a href="#profile-nav" class="box-block" data-toggle="collapse" aria-expanded="false">
                  <span class="pull-right dropdown-toggle">
                    <i class="dropdown-caret"></i>
                  </span>
                  <p class="mnp-name">{{ user.name }}</p>
                  <span class="mnp-desc">{{ user.email }}</span>
                </a>
              </div>
              <div id="profile-nav" class="collapse list-group bg-trans">
                <a  class="list-group-item">
                  <i class="pli-male icon-lg icon-fw"></i> View Profile
                </a>
                <a  class="list-group-item">
                  <i class="pli-gear icon-lg icon-fw"></i> Settings
                </a>
                <a  class="list-group-item">
                  <i class="pli-information icon-lg icon-fw"></i> Help
                </a>
                <router-link to="/logout" class="list-group-item">
                  <i class="pli-unlock icon-lg icon-fw"></i> Logout
                </router-link>
              </div>
            </div>


            <!--Shortcut buttons-->
            <!--================================-->
            <div id="mainnav-shortcut">
              <ul class="list-unstyled shortcut-wrap">
                <li class="col-xs-3" data-content="My Profile">
                  <a class="shortcut-grid" >
                    <div class="icon-wrap icon-wrap-sm icon-circle bg-mint">
                    <i class="pli-male"></i>
                    </div>
                  </a>
                </li>
                <li class="col-xs-3" data-content="Messages">
                  <a class="shortcut-grid" >
                    <div class="icon-wrap icon-wrap-sm icon-circle bg-warning">
                    <i class="pli-speech-bubble-3"></i>
                    </div>
                  </a>
                </li>
                <li class="col-xs-3" data-content="Activity">
                  <a class="shortcut-grid" >
                    <div class="icon-wrap icon-wrap-sm icon-circle bg-success">
                    <i class="pli-computer-secure"></i>
                    </div>
                  </a>
                </li>
                <li class="col-xs-3" data-content="Lock Screen">
                  <a class="shortcut-grid" >
                    <div class="icon-wrap icon-wrap-sm icon-circle bg-purple">
                    <i class="pli-lock-2"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!--================================-->
            <!--End shortcut buttons-->


            <ul id="mainnav-menu" class="list-group">
        
              <!--Category name-->
              <li class="list-header">Menu List</li>
        
              <li v-for="(nav, i) in navs" :key="i" :class="isRouteMatch(nav)">
                <router-link :to="nav.url" >
                  <i :class="nav.icon"></i>
                  <span class="menu-title">{{ nav.title }}</span>
                  <i v-if="nav.children" class="arrow"></i>
                </router-link>

                <ul v-if="nav.children" class="collapse" :class="{in: isRouteMatch(nav)}">
                  <li v-for="(child, x) in nav.children" :key="x" :class="isRouteMatch(child)">
                    <router-link :to="child.url">{{ child.title }}</router-link>
                  </li>
                </ul>
              </li>
        
            </ul>

          </div>
        </div>
      </div>
      <!--================================-->
      <!--End menu-->

    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppSidebar',

  data: () => ({
    publicPath: process.env.BASE_URL,
    navs: [
      { title: 'Courses', icon: 'pli-book', url: '', origin: 'courses', children: [
        { title: 'Course List', url: '/courses' },
        { title: 'Add Course', url: '/courses/create' }
      ]},
      { title: 'Users', icon: 'pli-male', url: '', origin: 'users', children: [
        { title: 'User List', url: '/users' },
        { title: 'Add User', url: '/users/create' }
      ]},
      { title: 'Settings', icon: 'pli-gear', url: '/settings' },
    ]
  }),

  computed: mapState('auth', ['user']),

  methods: {
    isRouteMatch(item) {
      if (item.children) {
        const check = item.origin == this.$route.path.split('/')[1]
        return check ? 'active-sub active' : ''
      } else {
        return item.url == this.$route.path ? 'active-link' : ''
      }
    },
  }
}
</script>