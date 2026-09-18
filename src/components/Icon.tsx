import React from 'react';
import {
  Youtube,
  Video,
  Instagram,
  Percent,
  DollarSign,
  BarChart2,
  TrendingUp,
  Heart,
  Radio,
  Users,
  PlayCircle,
  Award,
  Calculator,
  ArrowRight,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Check,
  Copy,
  ExternalLink,
  HelpCircle,
  Shield,
  FileText,
  Info,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Zap,
  Globe,
  Share2
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = 'w-5 h-5', size }: IconProps) {
  const props = { className, size };

  switch (name.toLowerCase()) {
    case 'youtube':
      return <Youtube {...props} />;
    case 'video':
    case 'tiktok':
      return <Video {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'percent':
    case 'affiliate':
      return <Percent {...props} />;
    case 'dollarsign':
    case 'business':
      return <DollarSign {...props} />;
    case 'barchart2':
    case 'rpm':
      return <BarChart2 {...props} />;
    case 'trendingup':
    case 'cpm':
      return <TrendingUp {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'radio':
    case 'ad':
      return <Radio {...props} />;
    case 'users':
    case 'social media':
    case 'growth':
      return <Users {...props} />;
    case 'playcircle':
    case 'roi':
      return <PlayCircle {...props} />;
    case 'award':
    case 'sponsorship':
      return <Award {...props} />;
    case 'calculator':
      return <Calculator {...props} />;
    case 'arrowright':
      return <ArrowRight {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'moon':
      return <Moon {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'x':
      return <X {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'copy':
      return <Copy {...props} />;
    case 'externallink':
      return <ExternalLink {...props} />;
    case 'helpcircle':
      return <HelpCircle {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'filetext':
      return <FileText {...props} />;
    case 'info':
      return <Info {...props} />;
    case 'chevronright':
      return <ChevronRight {...props} />;
    case 'chevrondown':
      return <ChevronDown {...props} />;
    case 'rotateccw':
      return <RotateCcw {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'share':
      return <Share2 {...props} />;
    default:
      return <Calculator {...props} />;
  }
}
