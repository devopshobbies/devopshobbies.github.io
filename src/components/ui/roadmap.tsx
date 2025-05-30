'use client'

import { useEffect, useRef, useState } from 'react'
import { Arrow, Group, Layer, Rect, Stage, Text } from 'react-konva'

const roadmapData = [
  {
    title: 'Fundamentals',
    description: 'Linux, Git, Networking',
    details: `<p class="mb-4 text-gray-700">Start with Linux command line, version control with Git, and basic networking concepts.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Linux administration</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Git workflows</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Basic networking</span>
                    </div>
                </div>`,
  },
  {
    title: 'Containers',
    description: 'Docker, Containerization',
    details: `<p class="mb-4 text-gray-700">Learn container fundamentals with Docker and container orchestration basics.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Docker images & containers</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Docker Compose</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Container best practices</span>
                    </div>
                </div>`,
  },
  {
    title: 'Infrastructure as Code',
    description: 'Terraform, Pulumi',
    details: `<p class="mb-4 text-gray-700">Manage infrastructure through declarative configuration files.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Terraform fundamentals</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Cloud provisioning</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">State management</span>
                    </div>
                </div>`,
  },
  {
    title: 'CI/CD',
    description: 'GitHub Actions, Jenkins',
    details: `<p class="mb-4 text-gray-700">Automate software delivery from commit to production.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Pipeline creation</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Automated testing</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Deployment strategies</span>
                    </div>
                </div>`,
  },
  {
    title: 'Kubernetes',
    description: 'Container Orchestration',
    details: `<p class="mb-4 text-gray-700">Deploy, scale, and manage containerized applications.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Pods, Deployments</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Services, Ingress</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Helm charts</span>
                    </div>
                </div>`,
  },
  {
    title: 'Monitoring',
    description: 'Prometheus, Grafana',
    details: `<p class="mb-4 text-gray-700">Gain visibility into system behavior through metrics.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Metrics collection</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Alerting</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Dashboards</span>
                    </div>
                </div>`,
  },
  {
    title: 'Cloud',
    description: 'AWS, Azure, GCP',
    details: `<p class="mb-4 text-gray-700">Deploy and manage applications in cloud environments.</p>
                <div class="space-y-3">
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Compute services</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Storage solutions</span>
                    </div>
                    <div class="flex items-center">
                        <div class="w-2 h-2 rounded-full bg-[#ec660e] mr-2"></div>
                        <span class="text-gray-700">Networking</span>
                    </div>
                </div>`,
  },
]

export default function DevOpsRoadmap() {
  const [stageWidth, setStageWidth] = useState(1200)
  const [stageHeight, setStageHeight] = useState(1500)
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate responsive dimensions
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth, 1200)
        setStageWidth(width)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidenav = document.querySelector('#sidenav')
      if (sidenav && !sidenav.contains(event.target as Node)) {
        setSelectedStep(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const nodeWidth = 200
  const nodeHeight = 120
  const padding = 60
  const nodesPerRow = Math.floor(stageWidth / (nodeWidth + padding * 1.5))

  const nodes = roadmapData.map((stepData, index) => {
    const row = Math.floor(index / nodesPerRow)
    const col = index % nodesPerRow
    const x = padding + (col * (nodeWidth + padding * 1.5))
    const y = padding + (row * (nodeHeight + padding))

    return {
      x,
      y,
      data: stepData,
      index,
    }
  })

  const connections = []
  for (let i = 0; i < nodes.length - 1; i++) {
    const node1 = nodes[i]
    const node2 = nodes[i + 1]

    if (Math.abs(node1.y - node2.y) < nodeHeight + padding) {
      connections.push({
        points: [
          node1.x + nodeWidth,
          node1.y + nodeHeight / 2,
          node2.x,
          node2.y + nodeHeight / 2,
        ],
        straight: true,
      })
    }
    else {
      const startX = node1.x + nodeWidth / 2
      const startY = node1.y + nodeHeight
      const endX = node2.x + nodeWidth / 2
      const endY = node2.y
      const controlY = startY + (endY - startY) / 2

      connections.push({
        points: [
          startX,
          startY,
          startX,
          controlY,
          endX,
          controlY,
          endX,
          endY,
        ],
        straight: false,
      })
    }
  }

  useEffect(() => {
    if (nodes.length > 0) {
      const lastNode = nodes.at(-1) as any
      const stageHeight = lastNode.y + nodeHeight + padding * 2
      setStageHeight(stageHeight)
    }
  }, [nodes])

  const handleNodeClick = (index: number) => {
    setSelectedStep(index)
    document.body.style.overflow = 'hidden'
  }

  const closeSidenav = () => {
    setSelectedStep(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-100 mb-3">DevOps Roadmap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A modern journey through essential DevOps technologies and practices
          </p>
        </div>

        <div ref={containerRef} className="w-full">
          <Stage width={stageWidth} height={stageHeight}>
            <Layer>
              {connections.map((conn, i) => (
                <Arrow
                  key={i}
                  points={conn.points}
                  stroke="#9ca3af"
                  strokeWidth={2}
                  pointerLength={8}
                  pointerWidth={8}
                  fill="#9ca3af"
                  dash={[10, 5]}
                  tension={conn.straight ? undefined : 0.1}
                />
              ))}

              {nodes.map((node) => (
                <Group
                  key={node.index}
                  x={node.x}
                  y={node.y}
                  onClick={() => handleNodeClick(node.index)}
                  onMouseEnter={(e) => {
                    const container = e.target.getStage()?.container()
                    if (container)
                      container.style.cursor = 'pointer'
                  }}
                  onMouseLeave={(e) => {
                    const container = e.target.getStage()?.container()
                    if (container)
                      container.style.cursor = 'default'
                  }}
                >
                  <Rect
                    width={nodeWidth}
                    height={nodeHeight}
                    cornerRadius={16}
                    fill=" color-mix(in oklab, #ffffff 15%, transparent)"
                    strokeWidth={2}
                    shadowColor="rgba(0, 0, 0, 0.1)"
                    shadowBlur={20}
                    shadowOpacity={0.3}
                    shadowOffset={{ x: 0, y: 5 }}
                  />
                  <Text
                    text={`${node.index + 1}`}
                    fontSize={24}
                    fontFamily="Inter"
                    fill="#ffffff"
                    fontStyle="bold"
                    x={16}
                    y={20}
                  />
                  <Text
                    text={node.data.title}
                    fontSize={18}
                    fontFamily="Inter"
                    fill="#ec660e"
                    width={nodeWidth - 32}
                    align="left"
                    x={40}
                    y={24}
                    fontStyle="bold"
                  />
                  <Text
                    text={node.data.description}
                    fontSize={14}
                    fontFamily="Inter"
                    fill="#cdcfd1"
                    width={nodeWidth - 32}
                    align="left"
                    x={26}
                    y={70}
                  />
                </Group>
              ))}
            </Layer>
          </Stage>
        </div>

        {/* Side Navigation */}
        <div
          id="sidenav"
          className={`fixed top-0 right-0 h-full w-96 bg-white/90 shadow-2xl transition-transform duration-300 ease-in-out p-8 overflow-y-auto z-50 ${
            selectedStep !== null ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={closeSidenav}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 cursor-pointer bg-gray-100 rounded-full p-2"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>

          {selectedStep !== null && (
            <div id="sidenav-content">
              <div className="flex items-center mb-6">
                <div
                  className="step-number text-3xl font-bold mr-4"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {selectedStep + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {roadmapData[selectedStep].title}
                  </h2>
                  <p className="text-gray-500">
                    {roadmapData[selectedStep].description}
                  </p>
                </div>
              </div>
              <div
                className="text-gray-700 space-y-4"
                dangerouslySetInnerHTML={{ __html: roadmapData[selectedStep].details }}
              />
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Recommended learning path
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Official documentation
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video tutorials
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}
