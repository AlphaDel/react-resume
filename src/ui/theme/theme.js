import React from 'react';

import MoreHorizIcon from 'material-ui-icons/MoreHoriz';
import LaravelIcon from 'react-devicon/laravel/plain'
import PhpIcon from 'react-devicon/php/plain'
import ReactIcon from 'react-devicon/react/original'
import RubyIcon from 'react-devicon/ruby/plain';
import RailsIcon from 'react-devicon/rails/plain';
import JavascriptIcon from 'react-devicon/javascript/plain';
import DockerIcon from 'react-devicon/docker/plain';
import WordpressIcon from 'react-devicon/wordpress/plain';
import IconLinux from 'react-devicon/linux/original' 
import IconPython from 'react-devicon/python/original'
import IconHtml5 from 'react-devicon/html5/original'
import IconBootstrap from 'react-devicon/bootstrap/plain'
import IconGit from 'react-devicon/git/original'
import IconAngularjs from 'react-devicon/angularjs/original'

const theme = {
  laravelColor: {
    style: {
      background: '#fd4f31',
      color: '#fff',
    },
    className: 'vertical-timeline-element--laravel',
    icon: <LaravelIcon />,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  phpColor: {
    style: {
      background: '#6181b6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--php',
    icon: <PhpIcon />,
    iconTag: <i className="fab fa-php fa-lg"></i>
  },
  reactColor: {
    style: {
      background: '#61DAFB',
      color: '#fff',
    },
    className: 'vertical-timeline-element--react',
    icon: <ReactIcon />,
    iconTag: <i className="fab fa-react fa-lg"></i>
  },
  javascriptColor: {
    style: {
      background: '#F0DB4F',
      color: '#fff',
    },
    className: 'vertical-timeline-element--javascript',
    icon: <JavascriptIcon />,
    iconTag: <i className="fab fa-js-square fa-lg"></i>
  },
  dockerColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--docker',
    icon: <DockerIcon />,
    iconTag: <i className="fab fa-docker fa-lg"></i>
  },
  wordpressColor: {
    style: {
      background: '#21759b',
      color: '#fff',
    },
    className: 'vertical-timeline-element--wordpress',
    icon: <WordpressIcon />,
    iconTag: <i className="fab fa-wordpress fa-lg"></i>
  },
  linuxColor: {
    style: {
      background: '#21759b',
      color: '#fff'
    },
    icon: <IconLinux />,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  pythonColor: {
    style: {
      background: '#99cc00',
      color: '#fff'
    },
    className: 'vertical-timeline-element--python',
    icon: <IconPython/>,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  htmlColor: {
    style: {
      background: '#ff9900',
      color: '#fff'
    },
    className: 'vertical-timeline-element--html',
    icon: <IconHtml5/>,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  bootstrapColor: {
    style: {
      background: '#b84dff',
      color: '#fff'
    },
    className: 'vertical-timeline-element--bootstrap',
    icon: <IconBootstrap/>,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  gitColor: {
    style: {
      background: '#ff4000',
      color: '#fff'
    },
    className: 'vertical-timeline-element--git',
    icon: <IconGit/>,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  },
  angularColor: {
    style: {
      background: '#ff4000',
      color: '#fff'
    },
    className: 'vertical-timeline-element--angular',
    icon: <IconAngularjs/>,
    iconTag: <i className="fab fa-angular fa-lg"></i>
  },
  
  othersColor: {
    style: {
      background: '#019bc6',
      color: '#fff',
    },
    className: 'vertical-timeline-element--others',
    icon: <MoreHorizIcon />,
    iconTag: <i className="fab fa-github-square fa-lg"></i>
  }
};

export default theme;
