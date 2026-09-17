'use client'

import { useState } from 'react'
import {
  Activity, AlertTriangle, ArrowUpRight, BarChart3, Bell, Boxes, ChevronDown, ChevronLeft, ChevronRight,
  CircleHelp, Clock3, Cloud, Database, FileKey2, FolderKanban, Gauge, HardDrive, LayoutDashboard,
  LifeBuoy, ListFilter, LockKeyhole, Menu, Network, Package, PanelLeft, Plus, Search, Server, Settings,
  ShieldCheck, Users, X, Zap
} from 'lucide-react'
import './styles.css'

type Section = { label: string; items: { name: string; icon: any; key: string }[] }
const sections: Section[] = [
  { label: 'Overview', items: [{ name: 'Dashboard', icon: LayoutDashboard, key: 'dashboard' }] },
  { label: 'Organization', items: [
    { name: 'Organizations', icon: Boxes, key: 'organizations' }, { name: 'Projects', icon: FolderKanban, key: 'projects' },
    { name: 'Users', icon: Users, key: 'users' }, { name: 'Identity & SSO', icon: ShieldCheck, key: 'identity' }, { name: 'Roles & Permissions', icon: LockKeyhole, key: 'permissions' }
  ]},
  { label: 'Cloud', items: [{ name: 'Compute', icon: Server, key: 'compute' }, { name: 'Storage', icon: HardDrive, key: 'storage' }, { name: 'Databases', icon: Database, key: 'databases' }, { name: 'Cache', icon: Zap, key: 'cache' }, { name: 'Networking', icon: Network, key: 'networking' }] },
  { label: 'Platform', items: [{ name: 'Deployments', icon: Package, key: 'deployments' }, { name: 'Observability', icon: Activity, key: 'observability' }, { name: 'Notifications', icon: Bell, key: 'notifications' }, { name: 'Secrets', icon: FileKey2, key: 'secrets' }] },
  { label: 'Financial', items: [{ name: 'Billing', icon: BarChart3, key: 'billing' }, { name: 'Usage', icon: Gauge, key: 'usage' }] },
  { label: 'System', items: [{ name: 'Settings', icon: Settings, key: 'settings' }] },
]

const metrics = [
  { label: 'Platform health', value: '99.98%', detail: 'All systems operational', trend: '+0.04%', tone: 'good', icon: Activity },
  { label: 'Active projects', value: '24', detail: 'Across 8 organizations', trend: '+3 this month', tone: 'neutral', icon: FolderKanban },
  { label: 'Compute resources', value: '186', detail: '142 running instances', trend: '76% utilized', tone: 'neutral', icon: Server },
  { label: 'Storage usage', value: '18.4 TB', detail: 'of 40 TB provisioned', trend: '46% utilized', tone: 'warning', icon: HardDrive },
]
const activity = [
  ['Production deployment completed', 'api-gateway · production', '2 min ago', 'good'],
  ['New project created', 'Acme Corporation · payments', '18 min ago', 'neutral'],
  ['Database backup completed', 'postgres-primary · us-east-1', '42 min ago', 'good'],
  ['Elevated API latency detected', 'api-gateway · us-west-2', '1 hr ago', 'warning'],
  ['SSO configuration updated', 'Mendanize Inc. · security', '3 hr ago', 'neutral'],
]
const resources = [['api-gateway', 'Compute instance', 'us-east-1', 'Healthy', '41%'], ['postgres-primary', 'PostgreSQL 16', 'us-east-1', 'Healthy', '68%'], ['object-store-prod', 'Object storage', 'us-east-1', 'Healthy', '46%'], ['edge-cache', 'Redis cluster', 'global', 'Warning', '84%']]

export default function Console() {
  const [active, setActive] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const current = sections.flatMap(s => s.items).find(i => i.key === active)?.name ?? 'Dashboard'
  return <div className="console">
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><Cloud size={17}/></div>{!collapsed && <><div><strong>Nize<span>Cloud</span></strong><small>ADMIN CONSOLE</small></div><button className="icon-btn close-mobile" onClick={() => setMobileOpen(false)}><X size={16}/></button></>}</div>
      <div className="workspace"><div className="workspace-avatar">M</div>{!collapsed && <div className="workspace-copy"><span>Mendanize Inc.</span><small>Organization</small></div>}{!collapsed && <ChevronDown size={14}/>}</div>
      <nav>{sections.map(section => <div className="nav-group" key={section.label}><div className="nav-label">{!collapsed && section.label}</div>{section.items.map(item => { const Icon = item.icon; return <button key={item.key} className={`nav-item ${active === item.key ? 'active' : ''}`} onClick={() => {setActive(item.key); setMobileOpen(false)}} title={collapsed ? item.name : undefined}><Icon size={17}/>{!collapsed && <span>{item.name}</span>}{active === item.key && !collapsed && <span className="active-dot"/>}</button>})}</div>)}</nav>
      <div className="sidebar-bottom"><button className="nav-item"><CircleHelp size={17}/>{!collapsed && 'Help & support'}</button><button className="nav-item"><Settings size={17}/>{!collapsed && 'Preferences'}</button><div className="user-card"><div className="user-avatar">OC</div>{!collapsed && <div><strong>O. Chinedu</strong><small>Administrator</small></div>}</div></div>
    </aside>
    <main className="main"><header className="topbar"><button className="icon-btn mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={19}/></button><button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}><PanelLeft size={17}/><span>{collapsed ? 'Expand' : 'Collapse'}</span></button><div className="topbar-actions"><div className="search"><Search size={16}/><input placeholder="Search resources..."/><kbd>⌘ K</kbd></div><button className="icon-btn"><Bell size={18}/><i/></button><div className="top-avatar">OC</div></div></header><div className="content"><div className="breadcrumbs"><span>Console</span><ChevronRight size={14}/><strong>{current}</strong></div>{active === 'dashboard' ? <Dashboard onNavigate={setActive}/> : <SectionView name={current} active={active}/>}</div></main>
  </div>
}

function Dashboard({onNavigate}:{onNavigate:(key:string)=>void}) { return <>
  <div className="page-heading"><div><p className="eyebrow">Wednesday, September 17, 2026</p><h1>Good morning, O. Chinedu</h1><p className="subheading">Here&apos;s what&apos;s happening across your NizeCloud platform.</p></div><button className="primary" onClick={() => onNavigate('projects')}><Plus size={16}/> New project</button></div>
  <div className="status-banner"><div className="status-icon"><ShieldCheck size={18}/></div><div><strong>All systems operational</strong><span>Every NizeCloud service is running normally.</span></div><button>View status <ArrowUpRight size={14}/></button></div>
  <div className="metric-grid">{metrics.map(m => {const Icon=m.icon; return <div className="metric-card" key={m.label}><div className="metric-top"><span>{m.label}</span><div className={`metric-icon ${m.tone}`}><Icon size={16}/></div></div><div className="metric-value">{m.value}</div><div className="metric-detail"><span>{m.detail}</span><em className={m.tone}>{m.trend}</em></div></div>})}</div>
  <div className="dashboard-grid"><div className="panel utilization"><div className="panel-heading"><div><h2>Resource utilization</h2><p>Current utilization across your platform</p></div><button className="filter-btn">Last 24 hours <ChevronDown size={14}/></button></div><div className="chart"><div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div className="chart-area"><div className="grid-lines"><i/><i/><i/><i/><i/></div><svg viewBox="0 0 700 190" preserveAspectRatio="none" aria-label="Resource utilization chart"><path d="M0 138 C35 125 52 142 80 122 S126 99 155 115 S202 133 230 102 S276 83 305 94 S347 128 380 105 S422 65 454 80 S500 94 525 63 S578 45 610 59 S665 27 700 40" fill="none" stroke="#5b8def" strokeWidth="2.5"/><path d="M0 155 C40 149 50 163 86 144 S130 133 163 140 S210 145 245 122 S290 110 321 127 S365 143 392 120 S430 104 463 120 S500 129 540 99 S580 95 610 107 S665 87 700 94" fill="none" stroke="#55c2a0" strokeWidth="2.5"/><path d="M0 175 C32 164 55 176 86 166 S132 160 160 172 S213 168 240 155 S282 148 310 162 S370 167 400 151 S445 140 473 151 S525 155 550 139 S620 125 650 139 S680 128 700 131" fill="none" stroke="#e2a84b" strokeWidth="2.5"/></svg><div className="chart-x"><span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>Now</span></div></div></div><div className="legend"><span><i className="blue"/>Compute</span><span><i className="green"/>Storage</span><span><i className="amber"/>Database</span></div></div>
  <div className="panel activity"><div className="panel-heading"><div><h2>Recent activity</h2><p>Latest events from your organization</p></div><button className="text-btn">View all <ArrowUpRight size={14}/></button></div><div className="activity-list">{activity.map(([title,meta,time,tone]) => <div className="activity-row" key={title}><div className={`activity-dot ${tone}`}/><div className="activity-copy"><strong>{title}</strong><span>{meta}</span></div><time>{time}</time></div>)}</div></div></div>
  <div className="lower-grid"><div className="panel resources"><div className="panel-heading"><div><h2>Key resources</h2><p>Resources requiring your attention</p></div><button className="text-btn" onClick={() => onNavigate('compute')}>View resources <ArrowUpRight size={14}/></button></div><div className="table-wrap"><table><thead><tr><th>Resource</th><th>Type</th><th>Region</th><th>Status</th><th>Utilization</th></tr></thead><tbody>{resources.map(r=><tr key={r[0]}><td><div className="resource-name"><div className="resource-icon"><Server size={14}/></div><strong>{r[0]}</strong></div></td><td>{r[1]}</td><td>{r[2]}</td><td><span className={`badge ${r[3].toLowerCase()}`}><i/>{r[3]}</span></td><td><div className="util"><span>{r[4]}</span><div><i style={{width:r[4]}}/></div></div></td></tr>)}</tbody></table></div></div><div className="panel alerts"><div className="panel-heading"><div><h2>Alerts</h2><p>Issues needing attention</p></div><span className="count">2</span></div><div className="alert-item warning"><AlertTriangle size={16}/><div><strong>Cache utilization is high</strong><span>edge-cache is at 84% capacity</span></div><ChevronRight size={15}/></div><div className="alert-item critical"><AlertTriangle size={16}/><div><strong>SSL certificate expiring</strong><span>api.mendanize.com · 12 days left</span></div><ChevronRight size={15}/></div><button className="view-alerts">View all alerts <ArrowUpRight size={14}/></button></div></div>
</> }

function SectionView({name,active}:{name:string,active:string}) { const descriptions:Record<string,string>={organizations:'Manage organizations and their cloud environments.',projects:'Projects are the primary unit for organizing cloud resources.',users:'Manage users, invitations, and account access.',identity:'Configure SSO, sessions, and identity providers.',permissions:'Define roles and access policies across NizeCloud.',compute:'Provision and monitor compute resources.',storage:'Manage buckets, volumes, and object storage.',databases:'Manage managed database instances and backups.',cache:'Manage Redis clusters and edge caching.',networking:'Configure networks, domains, and traffic policies.',deployments:'Track releases and deployment environments.',observability:'Monitor system health, logs, traces, and alerts.',notifications:'Manage operational notification channels.',secrets:'Securely manage environment secrets and credentials.',billing:'Review invoices, plans, and payment settings.',usage:'Understand resource usage and cost drivers.',settings:'Configure console, security, API, and audit preferences.'}; return <><div className="page-heading"><div><p className="eyebrow">NIZECLOUD / {active.toUpperCase()}</p><h1>{name}</h1><p className="subheading">{descriptions[active]}</p></div><button className="primary"><Plus size={16}/> Create {name === 'Projects' ? 'project' : 'resource'}</button></div><div className="empty-shell"><div className="empty-icon"><Cloud size={24}/></div><h2>{name} workspace</h2><p>This control plane is ready for live NizeCloud API data. The interface, filters, tables, and resource patterns are in place.</p><div className="empty-actions"><button className="primary"><Plus size={16}/> Get started</button><button className="secondary"><ListFilter size={16}/> Explore configuration</button></div></div></> }
